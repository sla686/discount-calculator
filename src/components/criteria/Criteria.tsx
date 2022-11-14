import { FormEvent, ChangeEvent, useState } from "react";

const Criteria = ({
  formCriteria,
}: {
  formCriteria: (result: string[]) => void;
}) => {
  const [sales, setSales] = useState("");
  const [month, setMonth] = useState("1");
  const [special, setSpecial] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    //// SALES DISCOUNT
    let result = [];
    const numSales = Number(sales);
    switch (true) {
      case numSales < 10:
        // No discount if sales is less than 10
        result.push("0");
        break;
      case numSales >= 10 && numSales < 20:
        result.push("5");
        break;
      case numSales >= 20:
        result.push("10");
        break;

      default:
        break;
    }

    //// MONTH DISCOUNT
    // Hardcoded:
    // number of the month = the discount - 1
    // January will be default value with 0% discount
    const numMonth = Number(month) - 1;
    if (numMonth) result.push(numMonth.toString());

    //// SPECIAL DISCOUNT
    // You set it by yourself
    if (special) result.push(special);

    console.log(result);
    formCriteria(result);
  };

  return (
    <>
      <div className="criteria">
        <h2>Criteria</h2>
        <form onSubmit={onSubmit} className="form-container">
          <div>
            <label htmlFor="sales">Amount of sales in the past</label>
            <input
              type="number"
              className="input-text"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSales(e.target.value)
              }
              value={sales}
              name="sales"
              min="0"
            />
          </div>
          <div>
            <label htmlFor="month">Time of the year</label>
            <select
              name="month"
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setMonth(e.target.value)
              }
              value={month}
            >
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <div>
            <label htmlFor="special">Special deal (%)</label>
            <input
              type="number"
              className="input-text"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSpecial(e.target.value)
              }
              value={special}
              name="special"
              min="0"
              max="100"
            />
          </div>
          <input type="submit" className="btn" value={"Submit"} />
        </form>
      </div>
    </>
  );
};

export default Criteria;
