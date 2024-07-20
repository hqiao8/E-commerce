const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    addresses: {
        type: [
            {
                name: {
                    type: String
                },
                street: {
                    type: String
                },
                city: {
                    type: String
                },
                province: {
                    type: String
                },
                postalCode: {
                    type: String
                },
                country: {
                    type: String
                },
                phone: {
                    type: Number
                },
                alias: {
                    type: String
                }
            }
        ],
        default: []
    },
    purchases: {
        type: [
            {
                products: {
                    type: [
                        {
                            model: {
                                type: String
                            },
                            colour: {
                                type: String
                            },
                            storage: {
                                type: String
                            },
                            price: {
                                type: Number
                            },
                            count: {
                                type: Number
                            }
                        }
                    ]
                },
                address: {
                    type: String
                },
                total: {
                    type: Number
                },
                timestamp: {
                    type: Date
                }
            }
        ],
        default: [
            {
                products: [],
                address: "",
                total: 0.00,
                timestamp: null
            }
        ]
    }
});

schema.pre("save", () => this.password = bcrypt.hash(this.password, 12));

module.exports = mongoose.model("User", schema);