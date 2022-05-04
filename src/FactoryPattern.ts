interface Shoe {
  purpose: string;
}

class BalletFlat implements Shoe {
  purpose = 'dancing';
}

class Boot implements Shoe {
  purpose = 'woodcutting';
}

class Sneaker implements Shoe {
  purpose = 'walking';
}
type ShoeCreator = {
  create(type: 'balletFlat'): BalletFlat;
  create(type: 'boot'): Boot;
  create(type: 'sneaker'): Sneaker;
};
const ShoeObj: ShoeCreator = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat':
        return new BalletFlat();

      case 'boot':
        return new Boot();

      case 'sneaker':
        return new Sneaker();

      default:
        return new Boot();
    }
  },
};

ShoeObj.create('boot');
