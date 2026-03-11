const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const budgetData = require("../data/budget");
router.get("/results", async (req, res) => {
    try {
        const { college, branch } = req.query;
        
        const feedbacks = await Feedback.find({ college, branch });
        
        const total = feedbacks.length;
        
        if(total === 0) {
            return res.json({ success: false, message: "No feedback found" });
        }

        const facilities = ["washroom", "sportsComplex", "digitalBoards", "labsMaintained", "labEquipment"];
        
        const results = {};
        
        facilities.forEach(facility => {
            const noCount = feedbacks.filter(f => f[facility] === false).length;
            const percentage = Math.round((noCount / total) * 100);
            const budget = budgetData[college]?.[branch] || {}
            results[facility] = {
                noPercentage: percentage,
                flagged: percentage >= 70,
                budgetAllocated: budget[facility] || 0,
                amountAtRisk: percentage >= 70 ? budget[facility] : 0
            }
        })

        res.json({ success: true, total, results });

    } catch(err) {
        res.json({ success: false, message: err.message });
    }
})

module.exports = router;