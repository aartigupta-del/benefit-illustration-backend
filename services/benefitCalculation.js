exports.calculateBenefits = (policyParams) => {
    const { age, premium, term } = policyParams;
    const benefits = premium * term * (age / 1000); // Example calculation
    return { benefits };
  };
  