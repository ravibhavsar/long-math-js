const addLongHandler = require(`${SRC}/arithmetic/add-long.js`);

describe('add-long handler', () => {
  it('long int should be added successfully', async () => {
    const x = "66666666631813123131232132131231231233231";
    const y = "1832347623468324374387487417348371";
    const result = addLongHandler.addLong(x, y);
    expect(result).to.equal("66666668464160746599556506518718648581602");
  });

  it('argument should be swapped', async () => {
    const x = "1832347623468324374387487417348371";
    const y = "66666666631813123131232132131231231233231";
    const result = addLongHandler.addLong(x, y);
    expect(result).to.equal("66666668464160746599556506518718648581602");
  });
});
