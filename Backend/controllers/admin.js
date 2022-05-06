const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  }).then((res) => {
    console.log("datqa inserted in product database");
  }).catch()

};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId).then((data) => {

    if (!data) {
      return res.redirect('/');
    }
  res.render('admin/edit-product', {
    pageTitle: 'Edit Product',
    path: '/admin/edit-product',
    editing: editMode,
    product: data
  });

  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  console.log("thissssssssssssssssss------>")
  Product.findByPk(prodId).then((product) => {
    product.title = req.body.title;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.save();
  })
  .then((res)=>{
    console.log("updated product",res)
  })

    .catch((err) => console.log("this is error", err));
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.findAll().then((data) => {
    res.render('admin/products', {
      prods: data,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch((err) => console.log("error", err))

};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/admin/products');
};
//ghsfjgsdffsd