// package: com.book
// file: book.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as book_pb from "./book_pb";


import { IBookServiceClient, BookServiceClient } from './book_grpc_pb';

export interface IBookServiceAsyncClient extends IBookServiceClient {
    getBookAsync(request: book_pb.GetBookRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): Promise<book_pb.Book>;
}

export class BookServiceAsyncClient extends BookServiceClient implements IBookServiceAsyncClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object) {
        super(address, credentials, options);
    }
    public getBookAsync(request: book_pb.GetBookRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): Promise<book_pb.Book> {
        return new Promise((resolve, reject) => this.getBook(request, metadata, options, (e, r) => e ? reject(e) : resolve(r)));
    }
}
