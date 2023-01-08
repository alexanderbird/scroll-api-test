import { buildClient, wrapFetch } from 'scroll-api-sdk';
import fetch from 'node-fetch';

describe('Verses', () => {
  it('retrieves a single verse by id', async () => {
    const client = buildClient({ timeProvider: () => 0, httpGet: wrapFetch(fetch), log: () => {} });
    const result = await client.getVerses({
      ids: [ '65-001-015' ]
    });
    expect(result.verses.map(x => x.text)).toEqual([someSpecificVerses["65-001-015"]]);
  });

  it('retrieves verses by id', async () => {
    const client = buildClient({ timeProvider: () => 0, httpGet: wrapFetch(fetch), log: () => {} });
    const result = await client.getVerses({
      ids: [ '65-001-015', '65-001-018', '65-001-011', '65-001-010' ]
    });
    const actual = {};
    result.verses.forEach(x => { actual[x.id] = x.text; });
    expect(actual).toEqual(someSpecificVerses);
  });
});


const someSpecificVerses = {
  "65-001-015": "to execute judgment on all, and to convict all the ungodly of all their works of ungodliness which they have done in an ungodly way, and of all the hard things which ungodly sinners have spoken against him.” ",
  "65-001-018": "They said to you, “In the last time there will be mockers, walking after their own ungodly lusts.” ",
  "65-001-011": "Woe to them! For they went in the way of Cain, and ran riotously in the error of Balaam for hire, and perished in Korah’s rebellion. ",
  "65-001-010": "But these speak evil of whatever things they don’t know. They are destroyed in these things that they understand naturally, like the creatures without reason. ",
}
