import PropTypes from "prop-types";
import SingleCookTable from "../SingleCookTable/SingleCookTable";

const CookTable = ({ cookTable, setCookTable, currentlyCooking, setCurrentlyCooking }) => {
  // Calculate total preparation time and calories
  const totalPreparationTime = currentlyCooking.reduce(
    (acc, item) => acc + parseFloat(item.preparing_time),
    0
  );

  const totalCalories = currentlyCooking.reduce(
    (acc, item) => acc + parseFloat(item.calories),
    0
  );

  return (
    <div className="md:w-1/3 w-full p-4">
      <h1 className="text-3xl mb-4">Want to cook: {cookTable.length}</h1>

      {/* Want to Cook Table */}
      <div className="overflow-x-auto mb-6">
        <table className="table w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th>ID</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {cookTable.map((table) => (
              <SingleCookTable
                key={table.recipe_id}
                singleCookTable={table}
                setCookTable={setCookTable}
                setCurrentlyCooking={setCurrentlyCooking}
              ></SingleCookTable>
            ))}
          </tbody>
        </table>
      </div>

      {/* Currently Cooking Table */}
      <h1 className="text-3xl mb-4">Currently Cooking: {currentlyCooking.length}</h1>
      <div className="overflow-x-auto mb-6">
        <table className="table w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th>ID</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {currentlyCooking.map((item) => (
              <tr key={item.recipe_id}>
                <td>{item.recipe_id}</td>
                <td>{item.recipe_name}</td>
                <td>{item.preparing_time}</td>
                <td>{item.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Time and Calories */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-lg">Total Preparation Time: {totalPreparationTime} minutes</p>
        <p className="text-lg">Total Calories: {totalCalories} kcal</p>
      </div>
    </div>
  );
};

CookTable.propTypes = {
  cookTable: PropTypes.array,
  setCookTable: PropTypes.func,
  currentlyCooking: PropTypes.array,
  setCurrentlyCooking: PropTypes.func,
};

export default CookTable;





