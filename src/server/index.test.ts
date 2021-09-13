import { Request, Response } from 'express';
import { articleApiRouteHandler, API_URL } from '.';

describe('articleApiRouteHandler', () => {
  const mockFetch = jest.fn();
  const mockResponseData = {
    title: 'My article',
  };
  const mockSendResponse = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    global.fetch = mockFetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponseData),
    });
  });

  it('should call fetch with the q query param appended if it exists', async () => {
    const qParam = 'music';
    const mockRequest = {
      query: {
        q: qParam,
      },
    } as unknown as Request;

    const mockResponse = {
      send: mockSendResponse,
    } as unknown as Response;

    await articleApiRouteHandler(mockRequest, mockResponse);

    expect(mockFetch).toHaveBeenLastCalledWith(`${API_URL}&q=${qParam}`);
    expect(mockSendResponse).toHaveBeenLastCalledWith(mockResponseData);
  });

  it('should call fetch without the q query param', async () => {
    const mockRequest = {
      query: {},
    } as unknown as Request;

    const mockResponse = {
      send: mockSendResponse,
    } as unknown as Response;

    await articleApiRouteHandler(mockRequest, mockResponse);

    expect(mockFetch).toHaveBeenCalledWith(`${API_URL}`);
    expect(mockSendResponse).toHaveBeenLastCalledWith(mockResponseData);
  });
});
