import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

import { ServiceService } from 'src/app/shared/service.service';


@Component({
  selector: 'app-product-ditails',
  templateUrl: './product-ditails.component.html',
  styleUrls: ['./product-ditails.component.css']
})
export class ProductDitailsComponent{
  products:any ;
  product :any ;
  constructor(private productservice : ServiceService){}

  ngOnInit(){
    const product_id=this.productservice.getProdustById;
    this.productservice.getproduct().subscribe((res:any)=>this.products = res.products)
  }


}


    //   id : any;
    //   data:any = {}
    //   constructor (private route : ActivatedRoute , private service : ServiceService){
    //     this.id = this.route.snapshot.paramMap.get('id')
    //     console.log(this.id);
    //   }

    //   ngOnInit(): void{
    //     this.getProduct()
    //   }


    //   getProduct(){
    //     this.service.getProdustById(this.id).subscribe(res => {
    //       this.data = res
    //     })
    //   }
    
      
    // }

