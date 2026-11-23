// buggy-report.ts · S09 Error Handling and Debugging · Exercises 1 and 4
//
// Run:   npx tsx buggy-report.ts   (in the JavaScript Debug Terminal to debug)
//
// This program prints a report for the service request queue. It compiles and
// runs without any error, but the report is wrong. There are 4 hidden bugs.
//
// Exercise 1: find each bug with the VS Code debugger (breakpoints, Variables,
// Watch, Call Stack, Debug Console), NOT with console.log. For each bug write
// down: the line, the cause, the fix.
//
// Exercise 4: set a conditional breakpoint that stops only on the request
// with id 1042.
//
// Rules of the report:
//   - Requests are listed in the order they appear in the data (by id).
//   - SLA: priority 1 = 4h, priority 2-3 = 24h, priority 4-5 = 72h.
//   - Resolved requests are not open and never overdue.
//   - "Average hours open" is the average over OPEN requests only.
//   - "Oldest open" lists the 3 open requests with the most hours open.
//
// Expected output when all 4 bugs are fixed:
//
//   REQ-1001  In Review         P2  OVERDUE by 6h  Broken street light
//   REQ-1007  Submitted         P1  OVERDUE by 2h  Pothole on Vitosha Blvd
//   REQ-1015  Resolved          P5  resolved       Graffiti on the school wall
//   REQ-1023  Waiting for Info  P3  4h left        Overflowing bins at the market
//   REQ-1042  In Review         P3  OVERDUE by 6h  Water leak on Rakovski Street
//   REQ-1050  Submitted         P2  12h left       Fallen tree blocks the path
//   REQ-1061  Resolved          P1  resolved       Missing manhole cover
//   REQ-1078  Submitted         P4  OVERDUE by 3h  Broken swing in the park
//
//   Open: 6, overdue: 4, average hours open: 28.8
//   Oldest open: REQ-1078, REQ-1001, REQ-1042

export {};

type Status = 'Submitted' | 'In Review' | 'Waiting for Info' | 'Resolved';

type ServiceRequest = {
  id: number;
  title: string;
  category: string;
  priority: number;
  status: Status;
  hoursOpen: number;
};

const CRITICAL_PRIORITY = 1;
const NORMAL_MAX_PRIORITY = 3;
const CRITICAL_SLA_HOURS = 4;
const NORMAL_SLA_HOURS = 24;
const LOW_SLA_HOURS = 72;
const ID_DIGITS = 4;
const TOP_OLDEST = 3;

const requests: ServiceRequest[] = [
  { id: 1001, title: 'Broken street light', category: 'Lighting', priority: 2, status: 'In Review', hoursOpen: 30 },
  { id: 1007, title: 'Pothole on Vitosha Blvd', category: 'Roads', priority: 1, status: 'Submitted', hoursOpen: 6 },
  { id: 1015, title: 'Graffiti on the school wall', category: 'Parks', priority: 5, status: 'Resolved', hoursOpen: 80 },
  { id: 1023, title: 'Overflowing bins at the market', category: 'Waste', priority: 3, status: 'Waiting for Info', hoursOpen: 20 },
  { id: 1042, title: 'Water leak on Rakovski Street', category: 'Water', priority: 3, status: 'In Review', hoursOpen: 30 },
  { id: 1050, title: 'Fallen tree blocks the path', category: 'Parks', priority: 2, status: 'Submitted', hoursOpen: 12 },
  { id: 1061, title: 'Missing manhole cover', category: 'Roads', priority: 1, status: 'Resolved', hoursOpen: 2 },
  { id: 1078, title: 'Broken swing in the park', category: 'Parks', priority: 4, status: 'Submitted', hoursOpen: 75 },
];

function formatRequestId(id: number): string {
  return `REQ-${String(id).padStart(ID_DIGITS, '0')}`;
}

function slaHours(priority: number): number {
  if (priority === CRITICAL_PRIORITY) {
    return CRITICAL_SLA_HOURS;
  }
  return priority < NORMAL_MAX_PRIORITY ? NORMAL_SLA_HOURS : LOW_SLA_HOURS;
}

function hoursLeft(request: ServiceRequest): number {
  return slaHours(request.priority) - request.hoursOpen;
}

function isOpen(request: ServiceRequest): boolean {
  return request.status !== 'Resolved';
}

function slaText(request: ServiceRequest): string {
  if (!isOpen(request)) {
    return 'resolved';
  }
  const left = hoursLeft(request);
  return left < 0 ? `OVERDUE by ${-left}h` : `${left}h left`;
}

function oldestOpen(list: ServiceRequest[], count: number): ServiceRequest[] {
  return list
    .sort((a, b) => b.hoursOpen - a.hoursOpen)
    .filter(isOpen)
    .slice(0, count);
}

function main(): void {
  // 1. Totals
  let openCount = 0;
  let overdueCount = 0;
  let totalOpenHours = 0;

  for (let i = 1; i < requests.length; i++) {
    const request = requests[i];
    if (!isOpen(request)) {
      continue;
    }
    openCount++;
    totalOpenHours += request.hoursOpen;
    if (hoursLeft(request) < 0) {
      overdueCount++;
    }
  }

  const averageOpenHours = totalOpenHours / requests.length;

  // 2. Oldest open requests
  const oldest = oldestOpen(requests, TOP_OLDEST);

  // 3. Print the list
  for (const request of requests) {
    const line = [
      formatRequestId(request.id),
      request.status.padEnd(16),
      `P${request.priority}`,
      slaText(request).padEnd(13),
      request.title,
    ].join('  ');
    console.log(line);
  }

  // 4. Print the summary
  console.log('');
  console.log(`Open: ${openCount}, overdue: ${overdueCount}, average hours open: ${averageOpenHours.toFixed(1)}`);
  console.log(`Oldest open: ${oldest.map((r) => formatRequestId(r.id)).join(', ')}`);
}

main();