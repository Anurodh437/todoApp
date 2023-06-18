import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalsService {
  userInfo: any;
  taskArray: any;
  editdata: any;
  editCheck: boolean = false;
  searchText: any;
  filteredData: any;
  showLoader: boolean = false;
  constructor(private http: HttpClient) {}

  addNewItem(value: string) {
    console.log(value);
    this.filteredData = this.taskArray.filter((item: any) => {
      return item.title.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  imageUpload(data: any) {
    return this.http.post(
      'https://api.cloudinary.com/v1_1/photosavers/image/upload',
      data
    );
  }
}
