const Criteria = ({ handleChange }: { handleChange: (id: string) => void }) => {
  return (
    <>
      <div className="criteria">
        <div>
          <input
            type="checkbox"
            className="criteria--checkbox"
            // checked={completed}
            onChange={() => handleChange("1")}
          />
          <h3>Amount of sales in the past</h3>
        </div>
        <div>
          <input
            type="checkbox"
            className="criteria--checkbox"
            // checked={completed}
            onChange={() => handleChange("2")}
          />
          <h3>Time of the year</h3>
        </div>
        <div>
          <input
            type="checkbox"
            className="criteria--checkbox"
            // checked={completed}
            onChange={() => handleChange("3")}
          />
          <h3>Special deal per product per customer</h3>
        </div>
      </div>
    </>
  );
};

export default Criteria;
