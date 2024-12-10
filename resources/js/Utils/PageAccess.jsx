export const pageAccess = {
    Dashboard: ["admin"],
    User: ["admin"],
    Meals: ["admin", "partner"],
    Tasks: ["admin", 'volunteer'],
    Partner: ["admin"],
    'My Orders': ["member"],
    Delivery: ["member"],
    Profile: ['admin', 'member', 'caregiver', 'donor', 'volunteer', 'partner'],
    "Member Management": ["caregiver"],
    "Member Assignment": ['caregiver'],
    Donation: ['donor'],
    'My Certificates': ['partner'],
    "My Tasks": ['volunteer']
};
