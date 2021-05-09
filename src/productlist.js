import { Link } from "react-router-dom";

export default function ProductList() {
  return (
    <>
      <div class="container-fluid " >
      <Link to="/productcreate" class="m-2 font-weight-bold text-danger">Create Product</Link>
        <div class="card shadow mb-4">
          <div class="card-header py-3">           
            <h6 class="m-0 font-weight-bold text-primary ">
            Product Table
            </h6>
          </div>
          <div class="card-body ">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Product</th>
                    <th>Mfg Place</th>
                    <th>Qty</th>
                    <th>Mfg Date</th>
                    <th>Price</th>
                    <th>Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Reckitt</td>
                    <td>Dettol soap</td>
                    <td>Pune</td>
                    <td>20</td>
                    <td>2021/04/25</td>
                    <td>$32</td>
                    <th><Link to="/productedit/1">Edit Product</Link></th>
                  </tr>
                  <tr>
                    <td>Hindustan Unilever</td>
                    <td>Dove shampoo</td>
                    <td>Hyedrabad</td>
                    <td>30</td>
                    <td>2021/07/25</td>
                    <td>$170</td>
                    <th><Link to="/productedit/2">Edit Product</Link></th>
                  </tr>
                  <tr>
                    <td>P&G</td>
                    <td>Gillette Mach 3 turbo</td>
                    <td>Mumbai</td>
                    <td>35</td>
                    <td>2021/01/12</td>
                    <td>$86</td>
                    <th><Link to="/productedit/3">Edit Product</Link></th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
