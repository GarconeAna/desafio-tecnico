const { Router } = require("express");

const User = require("./models/User");
const ConfigUser = require("./models/ConfigUser");
const { send } = require("express/lib/response");

const router = new Router();

router.post("/register", async (req, res, next) => {
    try {
        const { name, age, email } = req.body; 
        const userExists = await User.findOne({name});
        // console.log(idade)

        if (userExists) return res.status(400).send({error: "Name already used."});

        if (age < 18) return res.status(400).send({error: "Only users aged 18 and over."});

        const user = await User.create({
            name,
            age,
            email
        })

        res.status(201).send({
            id: user.id,
            name: user.name
        });
    } catch (err) {
        res.status(400)
        next(err);
    }
});

router.post("/config/:id", async (req, res, next) => {
    const { theme, notification } = req.body;
    const { id } = req.params; // id do user cadastrado

    try {
        const user = await User.findById(id); // achando o user pelo id na collection User
        const configUser = await ConfigUser.create({theme,
        notification});

        if (!user) {
            res.status(400).send({error: "User not found."}); // verificando se o user existe
        } else {
            await user.config.push(configUser); // adicionando no config da collection user
            user.save();
        }
        
        if (!configUser) res.status(400).send({error: "Unable to create configUser."});

        res.status(201).send(configUser);
    } catch (err) {
        res.status(400);
        next(err);
    }
});

router.get("/users", async  (req, res, next) => {
    try {
        const users = await User.find({});  

        if (!users.length) return res.status(400).send({error: "Unable to get users."});

        res.status(200).send(users.map(user => (
            {
                _id: user.id,
                name: user.name,
                config: user.config
            }
        )))
    } catch (err) {
        res.status(400)
        next(err);
    }
});

module.exports = router;