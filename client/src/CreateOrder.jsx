export default function CreateOrder({ contract }) {
    const create = async (event) => {
      event.preventDefault();
  
      try {
        const productName = document.querySelector("#productName").value;
        const amountValue = document.querySelector("#price").value;
        const price = parseInt(amountValue, 10);
  
        // Use the contract prop passed from parent component
        const transaction = await contract.createOrder(productName, price);
        await transaction.wait();
  
        //alert("Transaction successful");
        window.location.reload()
      } catch (error) {
        console.error("Error creating order:", error);
        alert("Failed to create order. Please check the console for details.");
      }
    };
  
    return (
      <div>
        <h2>Create Order</h2>
        <form onSubmit={create}>
          <div className="mx-auto my-4">
            <input
              type="text"
              required
              id="productName"
              placeholder="Product Name"
            />
          </div>
  
          <div className="mx-auto my-4">
            <input
              type="number"
              required
              id="price"
              placeholder="Price in units"
            />
          </div>
  
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
  