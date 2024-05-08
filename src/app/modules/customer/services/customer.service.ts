import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../authentication/services/storage/storage.service';

const BASE_URL = 'http://localhost:8083/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  

  constructor(
    private http: HttpClient
  ) { }


  // function to get all cars
  getAllCars(): Observable<any> {
    return this.http.get(BASE_URL + 'customer/cars', {
      headers: this.createAuthorizationHeader(),
    });
  }

  // function to get car by id
  getCarById(carId: number): Observable<any> {
    return this.http.get(BASE_URL + 'customer/car/' + carId, {
      headers: this.createAuthorizationHeader(),
    });
  }

    // function to get car by id
    carBooking(book: any): Observable<any> {
      return this.http.post('/bookings/car/book' , book, {
        headers: this.createAuthorizationHeader(),
      });
    }

      // function to get car by id
      getBookingByUserId(): Observable<any> {
    return this.http.get('/bookings/car/' + StorageService.getUserId(), {
      headers: this.createAuthorizationHeader(),
    });
  }

      // function to search car
      search(SearchCarDto: any): Observable<any> {
        return this.http.post(BASE_URL + 'customer/car/search', SearchCarDto, {
          headers: this.createAuthorizationHeader(),
        });
      }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.delete(
      'Authorization',
    );
  }


}
