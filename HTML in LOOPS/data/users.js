const userA = {
    name: {
        first: "John",
        last: "Doe"
    },
    contact: {
        email: "john@doe.com",
        phone: "123456789"
    },
    account: {
        created: new Date(),
        active: true,
        premium: true,
        credit: 100
    },
    interests: [
        "music",
        "science",
        "technology"
    ]
}

const userB = {
    name: {
        first: "Jane",
        last: "Doe"
    },
    contact: {
        email: "jane@doe.com",
        phone: "123456789"
    },
    account: {
        created: new Date(),
        active: true,
        premium: false,
        credit: 0
    },
    interests: [
        "music",
        "literature",
        "criminology"
    ]
}

const userC = {
    name: {
        first: "Timmy",
        last: "Doe"
    },
    contact: {
        email: "timmy@doe.com",
        phone: "123456789"
    },
    account: {
        created: new Date(),
        active: false,
        premium: false,
        credit: 0
    },
    interests: []
}

const userD = {
    name: {
        first: "Jill",
        last: "Doe"
    },
    contact: {
        email: "jill@doe.com",
        phone: "123456789"
    },
    account: {
        created: new Date(),
        active: true,
        premium: false,
        credit: 0
    },
    interests: [
        "music"
    ]
}

export default [userA, userB, userC, userD];