import { Component, OnInit } from '@angular/core';
import { Rank } from '../rank';
import { RankService } from '../rank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ranks: Rank[] = [];

  constructor(private rankService: RankService) { }

  ngOnInit(): void {
    this.rankService.getAll().subscribe((data: Rank[])=>{
      console.log(data);
      this.ranks = data;
    })
  }

  delete(id, name){
      if(confirm(`Czy na pewno chcesz usunać  stopień ${name}?`)){
        this.rankService.delete(id).subscribe(()=> this.refreshList());
      }


  }

  refreshList(){
    this.ranks = [];
    this.rankService.getAll().subscribe((data: Rank[])=>{
      console.log(data);
      this.ranks = data;
    })
  }

}
