import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ConductorServicio {

  constructor(private http:HttpClient) {

  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }

  getConductores() {
    let header = ConductorServicio.getCommonHeaders();
    return this.http.get("http://localhost:3000/Conductor",{headers: header});
  }

  getConductorBuscar(nombreBuscar) {
    let header = ConductorServicio.getCommonHeaders();
    return this.http.get(`http://localhost:3000/Conductor/${nombreBuscar}` , {headers: header});
  }
}
