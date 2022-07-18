import * as React from "react";

  const Insurances = (props:any) => {
    const { list } = props;
    const listItems = list.map((item:any) => <div className="card font-semibold text-lg" key={item}>{item}</div>);
    return (
      <>
        <div className="section">
          <h2 className="mb-4">Insurances Accepted</h2>
          <div className="pl-6 grid px-5 py-5 gap-5 text-center sm:grid-cols-2 lg:grid-cols-3">
            {listItems}
          </div>
        </div>
      </>
    );
  };
  
  export default Insurances;