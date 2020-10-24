import faker from 'faker';

import User from '../models/User';
import Product from '../models/Product';

class PromiseController {
  async store(req, res) {
    const user = await User.create({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });

    const product = await Product.create({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
    });

    const promise = Promise.all([user, product]);

    promise
      .catch(error => {
        return res.status(400).json(error);
      })
      .then(data => {
        return res.status(200).json(data);
      });
  }
}

export default new PromiseController();
