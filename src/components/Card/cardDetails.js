const cardDetails = [
    {
        img : "https://lh3.googleusercontent.com/proxy/_94SImX9RK2htK_TFzW-ifN8FGOyIc8jvy9mFlMdviX5eWc5igObeGEUNwq-fhhVM9D9CyBrgePfsDLhmGKcddAbz-oafvdZgav9M1kS8-FD6JvRLlcbkFprh8kMPmCF3Tby3z2_8pf5",
        name : "INCOME & EXPENSES HANDLING"
    },
    {
        img : "data:image/jpeg;base64,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",
        name : "PAYMENT"
    },
    {
        img : "data:image/jpeg;base64,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",
        name : "EMPLOYEE"
    }
];
export default cardDetails;
