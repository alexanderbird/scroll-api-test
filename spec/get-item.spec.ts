import { buildClient, wrapFetch } from 'scroll-api-sdk';
import fetch from 'node-fetch';

describe('Get One Item', () => {
  function buildTestClient(doLog?: boolean) {
    return buildClient({ timeProvider: () => 0, httpGet: wrapFetch(fetch), log: doLog ? console.info : () => {} });
  }

  it('retrieves a Bible verse', async () => {
    const client = buildTestClient();
    const result = await client.getItem({
      document: 'reference',
      language: 'en',
      translation: 'strongs',
      id: 'H2',
    });
    expect(result).toEqual({
      data: {
        definition: "{father}",
        derivation: "(Aramaic) corresponding to H1 (אָב)",
        original: "אַב",
      },
      id: "H2",
      reference: "H2",
      related: "15-004-015,15-005-012,27-002-023,27-005-002,27-005-011,27-005-011,27-005-011,27-005-013,27-005-018",
      textId: "reference|en|strongs",
      type: "STRONGS_ENTRY",
    });
  });
});

