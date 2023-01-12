import { buildClient, wrapFetch } from 'scroll-api-sdk';
import fetch from 'node-fetch';

describe('Canonical Order', () => {
  function buildTestClient(doLog?: boolean) {
    return buildClient({ timeProvider: () => 0, httpGet: wrapFetch(fetch), log: doLog ? console.info : () => {} });
  }

  it('retrieves items with id prefix', async () => {
    const client = buildTestClient();
    const results = [];
    let nextPage;
    do {
      const result = await client.getVersesInCanonicalOrder({
        idPrefix: '65-001-01',
        startingId: '65-001-012',
        direction: 'FORWARD',
        pageSize: 3,
        page: nextPage
      });
      nextPage = result.nextPage;
      results.push(result.verses.map(x => x.data.map(y => y.t).join(' ')));
    } while (nextPage);
    expect(results).toEqual(expectedForwardOrderPages );
  });

  it('retrieves items with id prefix in reverse order', async () => {
    const client = buildTestClient();
    const results = [];
    let nextPage;
    do {
      const result = await client.getVersesInCanonicalOrder({
        idPrefix: '65-001-01',
        startingId: '65-001-019',
        direction: 'REVERSE',
        pageSize: 3,
        page: nextPage
      });
      nextPage = result.nextPage;
      results.push(result.verses.map(x => x.data.map(y => y.t).join(' ')));
    } while (nextPage);
    expect(results).toEqual(expectedReverseOrderPages );
  });
});

const expectedForwardOrderPages = [
  [
    /* 65-001-013 */"wild waves of the sea, foaming out their own shame; wandering stars, for whom the blackness of darkness has been reserved   forever.",
    /* 65-001-014 */"About these also Enoch, the seventh from Adam, prophesied, saying, \"Behold, the Lord came with ten thousands of his holy ones,",
    /* 65-001-015 */"to execute judgment on all, and to convict all the ungodly of all their works of ungodliness which they have done in an ungodly way, and of all the hard things which ungodly sinners have spoken against him.\"",
  ],
  [
    /* 65-001-016 */"These are murmurers and complainers, walking after their lusts (and their mouth speaks proud things), showing respect of persons to gain advantage.",
    /* 65-001-017 */"But you, beloved, remember the words which have been spoken before by the apostles of our Lord Jesus Christ.",
    /* 65-001-018 */"They said to you that \"In the last time there will be mockers, walking after their own ungodly lusts.\"",
  ],
  [
    /* 65-001-019 */"These are they who cause divisions, and are sensual, not having the Spirit.",
  ]
];
 

const expectedReverseOrderPages = [
  [
    /* 65-001-018 */"They said to you that \"In the last time there will be mockers, walking after their own ungodly lusts.\"",
    /* 65-001-017 */"But you, beloved, remember the words which have been spoken before by the apostles of our Lord Jesus Christ.",
    /* 65-001-016 */"These are murmurers and complainers, walking after their lusts (and their mouth speaks proud things), showing respect of persons to gain advantage.",
  ],
  [
    /* 65-001-015 */"to execute judgment on all, and to convict all the ungodly of all their works of ungodliness which they have done in an ungodly way, and of all the hard things which ungodly sinners have spoken against him.\"",
    /* 65-001-014 */"About these also Enoch, the seventh from Adam, prophesied, saying, \"Behold, the Lord came with ten thousands of his holy ones,",
    /* 65-001-013 */"wild waves of the sea, foaming out their own shame; wandering stars, for whom the blackness of darkness has been reserved   forever.",
  ],
  [
    /* 65-001-012 */"These are hidden rocky reefs in your love feasts when they feast with you, shepherds who without fear feed themselves; clouds without water, carried along by winds; autumn leaves without fruit, twice dead, plucked up by the roots;",
    /* 65-001-011 */"Woe to them! For they went in the way of Cain, and ran riotously in the error of Balaam for hire, and perished in Korah's rebellion.",
    /* 65-001-010 */"But these speak evil of whatever things they don't know. What they understand naturally, like the creatures without reason, they are destroyed in these things.",
  ]
]
