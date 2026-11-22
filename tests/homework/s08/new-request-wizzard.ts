// Model the New Request wizard data as types: ContactDetails, Location, RequestDetails, Attachment, and one NewRequest that combines them

type ContactDetails = {
    name: string;
    email: string;
    phoneNumber: number;
}

type Location = {
    city: string;
    adress: string;
}

type RequestDetails = {
    title: string;
    category: string;
}

type Attachment = {
    hasAttachment: boolean;
}

type newRequest = ContactDetails & Location & RequestDetails & Attachment;

const requests: newRequest[] = [
    {name: 'Request', email: 'user@userInfo.user', phoneNumber: 1888888888, city: 'Varna', adress: 'On the streets', title: 'Title', category: 'Category', hasAttachment: false},
    {name: 'Request two', email: 'userTwo@userInfo.user', phoneNumber: 1777777777, city: 'Varna', adress: 'On the streets', title: 'Title', category: 'Category', hasAttachment: false},
    // 3 valid 3 invalid. i did 2 valid and 1 with 3 invalid proerties.
    // 1-number doesnt take 0 as first number for some reason, 2-Title is missing its value and 3-hasAttachment espects boolean and we give it string. I comment it because i dont like bright red in the code.
    //{name: 'Request two', email: 'userTwo@userInfo.user', phoneNumber: 0777777777, city: 'Varna', adress: 'On the streets', title:, category: 'Category', hasAttachment: 'false'}
];

for (const r of requests) {
    console.log(r);
}



