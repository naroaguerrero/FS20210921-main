import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../common-services';
import { LoggerService } from 'src/lib/my-core';

// tipo de datos para controlar la transición de estados
export type ModoCRUD = 'list' | 'add' | 'edit' | 'view' | 'delete';


export abstract class RESTDAOService<T, K> { //la abstracta primero para que la encuentre el siguiente
  protected baseUrl = environment.apiURL;
  constructor(
    protected http: HttpClient,
    entidad: string,
    protected option = {}
  ) {
    this.baseUrl += entidad;
  }
  query(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.baseUrl, this.option);
  }
  get(id: K): Observable<T> {
    return this.http.get<T>(this.baseUrl + '/' + id, this.option);
  }
  add(item: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, item, this.option);
  }
  change(id: K, item: T): Observable<T> {
    return this.http.put<T>(this.baseUrl + '/' + id, item, this.option);
  }
  remove(id: K): Observable<T> {
    return this.http.delete<T>(this.baseUrl + '/' + id, this.option);
  }
}
//Añadimos el servicio DAO
@Injectable({
  providedIn: 'root',
})
export class ContactosDAOService extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
    super(http, 'contactos', {
      //context: new HttpContext().set(AUTH_REQUIRED, true)
    });
  }
}

//clase base de los servicios DAO:
//La clase necesita los siguientes atributos
// • Un modo para saber el estado de la operación
// • Una colección con el listado de los elementos que se están visualizando.
// • Una referencia al elemento que se está visualizando o editando.
// • Una cache del identificador del elemento que originalmente se solicitó para su edición

@Injectable({
  providedIn: 'root',
})
export class ContactosViewModelService {
  //Atributos de la clase ContactosViewModelService:
  protected modo: ModoCRUD = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal: any = null;

  //Crear constructor e inyectar dependencias:
  constructor(
    protected notify: NotificationService,
    protected out: LoggerService,
    protected dao: ContactosDAOService
  ) {}

  //Crear propiedades que expongan los atributos enlazables en las plantillas:
  public get Modo(): ModoCRUD {
    return this.modo;
  }
  public get Listado(): Array<any> {
    return this.listado;
  }
  public get Elemento(): any {
    return this.elemento;
  }

  //Comando para obtener el listado a mostrar:
  public list(): void {
    this.dao.query().subscribe(
      (data) => {
        this.listado = data;
        this.modo = 'list';
      },
      (err) => this.notify.add(err.message)
    );
  }

  //Comandos para preparar las operaciones con la entidad:
  public add(): void {
    this.elemento = {};
    this.modo = 'add';
  }
  public edit(key: any): void {
    this.dao.get(key).subscribe(
      (data) => {
        this.elemento = data;
        this.idOriginal = key;
        this.modo = 'edit';
      },
      (err) => this.notify.add(err.message)
    );
  }
  public view(key: any): void {
    this.dao.get(key).subscribe(
      (data) => {
        this.elemento = data;
        this.modo = 'view';
      },
      (err) => this.notify.add(err.message)
    );
  }
  public delete(key: any): void {
    if (!window.confirm('¿Seguro?')) {
      return;
    }
    this.dao.remove(key).subscribe(
      (data) => this.list(),
      (err) => this.notify.add(err.message)
    );
  }
  // Para liberar la memoria cuando ya no sea necesaria:
  clear() {
    this.elemento = {};
    this.idOriginal = null;
    this.listado = [];
  }
  // Comandos para cerrar la vista de detalle o el formulario:
  public cancel(): void {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
  }
  public send(): void {
    switch (this.modo) {
      case 'add':
        this.dao.add(this.elemento).subscribe(
          (data) => this.cancel(),
          (err) => this.notify.add(err.message)
        );
        break;
      case 'edit':
        this.dao.change(this.idOriginal, this.elemento).subscribe(
          (data) => this.cancel(),
          (err) => this.notify.add(err.message)
        );
        break;
      case 'view':
        break;
    }
  }
}
