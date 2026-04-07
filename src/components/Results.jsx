import { calculateInvestmentResults } from "../util/investment";

const Results = ({ input }) => {
    const resultData = calculateInvestmentResults(input);

    console.log(resultData);
  return (
    <section >
        <p>result....</p>
    </section>
  )
}

export default Results