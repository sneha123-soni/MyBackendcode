const express = require("express");
const router = express.Router();

const { getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact } =
    require("../controller/contactController");

const validateToken = require("../middleware/validateTokenHandler");

// router.route("/").get((req, res) => {
//     // res.send("Get all contacts");
//     res.status(200).json({message: "Get all contacts"});
// });     
        //or

router.use(validateToken);

router.route("/").get(getContacts);

// router.route("/").post((req, res) => {
//     res.status(200).json({message: "Create Contact"});
// });

router.route("/").post(createContact);


// router.route("/:id").get((req, res) => {
//     res.status(200).json({message: `Get Contact for ${req.params.id}` });
// });

router.route("/:id").get(getContact);

// router.route("/:id").put((req, res) => {
//     res.status(200).json({message: `Update Contact for ${req.params.id}` });
// });

router.route("/:id").put(updateContact);


// router.route("/:id").delete((req, res) => {
//     res.status(200).json({message: `Delete Contact for ${req.params.id}`});
// });

router.route("/:id").delete(deleteContact);

module.exports = router;