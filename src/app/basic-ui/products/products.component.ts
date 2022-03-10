import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Product } from "../../models/Product.interface";
import { Category } from "../../models/Category.interface";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  addproduct: FormGroup;
  updateproduct: FormGroup;
  AllProducts: Product[];
  AllCategories: Category[];
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.AllProducts = [
      {
        id: 1,
        ProductName: "Test product name",
        ProductDetails: "Test product details",
        ProductCategory: "Test product category",
        ProductColor: "Test color",
        ProductQuantity: 10,
        ProductSizes: ["S", "XL", "XXL", "M"],
      },
    ];
    this.addproduct = this.formBuilder.group({
      productname: [null, Validators.required],
      productdetails: [null, Validators.required],
      productCategory: [null, Validators.required],
      productquantity: [null, Validators.required],
      // productImage: [null, Validators.required],
      // productSizes : [[] , Validators.required],
    });

    this.updateproduct = this.formBuilder.group({
      productname: [null, Validators.required],
      productdetails: [null, Validators.required],
      productCategory: [null, Validators.required],
      productquantity: [null, Validators.required],
      // productImage: [null, Validators.required],
      // productSizes : [[] , Validators.required],
    });
  }

  //here is the function needed to open a modal responsible for adding a new product
  Addnewproduct(content) {
    this.modalService.open(content, { size: "xl" });
  }

  //here is the function needed to open a modal needed for update the added product
  UpdateSelected(updatecontent) {
    this.modalService.open(updatecontent, { size: "xl" });
  }

  //here is the function needed to open a modal needed for confirm delete the added product
  DeleteSelected(content) {
    this.modalService.open(content);
  }

  //here is the function needed to call an endpoint api responsible for Add a new product
  //this function body contains an object called body
  //the pre-defined object contains :
  AddProduct() {
    let body = {};

    //api call go here
  }

  //here is the function needed to call an endpoint api responsible for update a selected project
  //this endpoint api call must contain the id of the selected row needed to update
  //also this function needed the same object sent in add new product called body
  //the pre-defined object contains :
  UpdateProduct() {
    let body = {};

    //api call go here
  }

  //here is the function needed to call an endpoint api responsible for delete a selected project
  //this endpoint api call must contain the id of the selected row needed to delete
  DeleteProduct() {}

  //here is the function needed to Get all added products
  //this function calls an endpoint api to get all added products
  GetAllProducts() {}

  //here is the function needed to get all added categories
  //this function calls an endpoint api to get all added categories
  GetAllCategories() {}

  //here is the function needed to close an opened modal
  Closemodal() {
    this.modalService.dismissAll();
    this.addproduct.reset();
  }
}
