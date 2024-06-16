const { Policy } = require('../models');
const { calculateBenefits } = require('../services/benefitCalculation');

exports.getPolicies = async (req, res) => {
  try {
    const policies = await Policy.findAll();
    res.json(policies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.calculatePolicy = async (req, res) => {
  const {dob,age,gender,sumAssured,premium,term,premiumFrequency,premiumPayingTerm} = req.body;

  try {
    const policyParams ={
      age:age,
      premium:premium,
      term:term
    }
    //await Policy.create({dob,age,gender,sumAssured,premium,term,premiumFrequency,premiumPayingTerm});
    const benefits = calculateBenefits(policyParams);
    const benefitsNumber = benefits.benefits; 
    await Policy.create({dob,age,gender,sumAssured,premium,term,premiumFrequency,premiumPayingTerm,benefits: benefitsNumber });
    res.json(benefits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
