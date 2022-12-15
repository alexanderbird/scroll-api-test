import { buildClient } from 'scroll-api-sdk';
const sum = (x, y) => 3;

describe('feed', () => {
  it('retrieves feed items', () => {
    const client = buildClient();
    expect(client.getFeedItems({}).nextPage).toEqual('todo');
  });
});
