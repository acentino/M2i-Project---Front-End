import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Channel } from '../models/channel';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  private urlApi: string;
  public collection$: Observable<Channel[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = this.httpClient.get<Channel[]>(`${this.urlApi}/channels`);
  }

  public add(order: Channel): Observable<Channel> {
    return this.httpClient.post<Channel>(`${this.urlApi}/channels`, Channel);
  }

  public delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlApi}/channels/${id}`);
  }

  public edit(channel: Channel): Observable<Channel> {
    return this.httpClient.put<Channel>(`${this.urlApi}/channels/${channel.id}`, channel);
  }

  public get(id: string): Observable<Channel> {
    return this.httpClient.get<Channel>(`${this.urlApi}/channels/${id}`);
  }


}
