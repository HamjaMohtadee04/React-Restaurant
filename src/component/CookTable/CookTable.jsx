import PropTypes from "prop-types";
import SingleCookTable from "../SingleCookTable/SingleCookTable";
// import SingleCookTable from "../SingleCookTable/SingleCookTable";

const CookTable = ({cookTable}) => {
    return (
        <div className="md:w-1/3">
            <h1 className="text-3xl">Want to cook:{cookTable.length}</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        // cookTable.map(p =>  <tr key={p.id}>
        //     <td>{p.recipe_id}</td>
        //     <td>{p.recipe_name}</td>
        //     <td>{p.preparing_time}</td>
        //     <td>{p.calories}</td>
        //   </tr>)
        cookTable.map(table => <SingleCookTable key={table.id} singleCookTable={table}></SingleCookTable>)
      }
     
    </tbody>
  </table>
</div>

            {/* {
                cookTable.map(cookTable =><SingleCookTable 
                    key={cookTable.id}
                    singleCookTable={cookTable}> 
                    </SingleCookTable>)
            } */}
        </div>
    );
};

CookTable.propTypes={
    cookTable : PropTypes.array
}
export default CookTable;