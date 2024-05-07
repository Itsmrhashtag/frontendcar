import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../authentication/services/storage/storage.service';

const BASE_URL = 'http://localhost:8081/api/v1/customer/';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  

  constructor(
    private http: HttpClient
  ) { }


  // function to get all cars
  getAllCars(): Observable<any> {
    return this.http.get(BASE_URL + 'cars', {
      headers: this.createAuthorizationHeader(),
    });
  }

  // function to get car by id
  getCarById(carId: number): Observable<any> {
    return this.http.get(BASE_URL + 'car/' + carId, {
      headers: this.createAuthorizationHeader(),
    });
  }

    // function to get car by id
    carBooking(book: any): Observable<any> {
      return this.http.post('http://localhost:8082/api/v1/bookings/car/book' , book, {
        headers: this.createAuthorizationHeader(),
      });
    }

      // function to get car by id
      getBookingByUserId(): Observable<any> {
    return this.http.get('http://localhost:8082/api/v1/bookings/car/' + StorageService.getUserId(), {
      headers: this.createAuthorizationHeader(),
    });
  }

      // function to search car
      search(SearchCarDto: any): Observable<any> {
        return this.http.post(BASE_URL + 'car/search', SearchCarDto, {
          headers: this.createAuthorizationHeader(),
        });
      }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }


}
