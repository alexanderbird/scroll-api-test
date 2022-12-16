import { buildClient } from 'scroll-api-sdk';

describe('feed', () => {
  it('retrieves feed items', async () => {
    const client = buildClient({ timeProvider: () => 1650000000 });
    const results = [];
    let nextPage;
    for (let i = 0; i < 6; i++) {
      const result = await client.getFeedItems({ pageSize: 5, page: nextPage });
      nextPage = result.nextPage;
      results.push(result.verses.map(x => x.text));
    }
    expect(results).toEqual(expectedPagesGroupedByFiveStartingAt1650000000 );
  });

  test.todo('handles different page sizes and different starting timestamps');
});

const expectedPagesGroupedByFiveStartingAt1650000000 = [
  [
    "But these speak evil of whatever things they don’t know. They are destroyed in these things that they understand naturally, like the creatures without reason. ", // feed key: 6cf09dbb0feba38843ccdea4905fa6d9
    "Yet in the same way, these also in their dreaming defile the flesh, despise authority, and slander celestial beings. ", // feed key: 9dadb007e80b4b1a53c2d4dc6b5b1aaf
    "Now to him who is able to keep them from stumbling, and to present you faultless before the presence of his glory in great joy, ", // feed key: a439ae030d8c9785b52037913f98f451
    "These are those who cause divisions and are sensual, not having the Spirit. ", // feed key: a8729c377667dbe4f33cdc7dede4a2a6
    "Angels who didn’t keep their first domain, but deserted their own dwelling place, he has kept in everlasting bonds under darkness for the judgment of the great day. ", // feed key: ad0c27ab41051893aa915b3af1d0b328
  ],
  [
    "to God our Savior, who alone is wise, be glory and majesty, dominion and power, both now and forever. Amen. ", // feed key: b4ecf11817d9cac5197daee131c19c63
    "Now I desire to remind you, though you already know this, that the Lord, having saved a people out of the land of Egypt, afterward destroyed those who didn’t believe. ", // feed key: b50d0a2752f2fece54e26c13158d1db6
    "and some save, snatching them out of the fire with fear, hating even the clothing stained by the flesh. ", // feed key: b97e4f87870f18a1ce5fee5317d37b91
    "May mercy, peace, and love be multiplied to you. ", // feed key: bef3d5547c547b51b5671dd15a2b86f2
    "For there are certain men who crept in secretly, even those who were long ago written about for this condemnation: ungodly men, turning the grace of our God into indecency, and denying our only Master, God, and Lord, Jesus Christ. ", // feed key: bfd6cb83365bbe0062ac7860f0410002
  ],
  [
    "These are murmurers and complainers, walking after their lusts—and their mouth speaks proud things—showing respect of persons to gain advantage. ", // feed key: cb254c8021c89b93996933e168272aca
    "These are hidden rocky reefs in your love feasts when they feast with you, shepherds who without fear feed themselves; clouds without water, carried along by winds; autumn trees without fruit, twice dead, plucked up by the roots; ", // feed key: d17d8b5b9486f9f7dc8735481ffe62db
    "About these also Enoch, the seventh from Adam, prophesied, saying, “Behold, the Lord came with ten thousands of his holy ones, ", // feed key: d2d646a09d0a37a8d81160a3f714cb5f
    "But you, beloved, remember the words which have been spoken before by the apostles of our Lord Jesus Christ. ", // feed key: d70ff91fa7d1675306c9f414fb138274
    "Jude, a servant of Jesus Christ, and brother of James, to those who are called, sanctified by God the Father, and kept for Jesus Christ: ", // feed key: e9948f0a82e2428a384bff1b1660a013
  ],
  [
    "Even as Sodom and Gomorrah and the cities around them, having in the same way as these given themselves over to sexual immorality and gone after strange flesh, are shown as an example, suffering the punishment of eternal fire. ", // feed key: ec670089a9bf1a374282ba103a686171
    "wild waves of the sea, foaming out their own shame; wandering stars, for whom the blackness of darkness has been reserved forever. ", // feed key: fdfc5640af779b53b9c6ce457c452aa6
    "to execute judgment on all, and to convict all the ungodly of all their works of ungodliness which they have done in an ungodly way, and of all the hard things which ungodly sinners have spoken against him.” " // feed key: fe896352bafca0c70d8b4314a03eb05a
  ],
  // end of the list; wrapping around to the start
  [
    "Keep yourselves in God’s love, looking for the mercy of our Lord Jesus Christ to eternal life. ", // feed key: 1d4075d27ab0cf32fbf94c1e9821b833
    "They said to you, “In the last time there will be mockers, walking after their own ungodly lusts.” ", // feed key: 25e0986ad5266929c6e0208908db6e2d
    "But Michael, the archangel, when contending with the devil and arguing about the body of Moses, dared not bring against him an abusive condemnation, but said, “May the Lord rebuke you!” ", // feed key: 34782ba3f1eb4cc9a6511930b6c763b5
    "Woe to them! For they went in the way of Cain, and ran riotously in the error of Balaam for hire, and perished in Korah’s rebellion. ", // feed key: 3bec4740f0cb71d95e51894fc467d28d
    "Beloved, while I was very eager to write to you about our common salvation, I was constrained to write to you exhorting you to contend earnestly for the faith which was once for all delivered to the saints. ", // feed key: 4e7fcd89669ed00e0abd394649cc6c0c
  ],
  // note: this page includes a few items from the first page
  [
    "But you, beloved, keep building up yourselves on your most holy faith, praying in the Holy Spirit. ", // feed key: 542e1e80a69a45130fba36215f991914
    "On some have compassion, making a distinction, ", // feed key: 54a45d92bfb8daca1e799a0f63497b4d
    "But these speak evil of whatever things they don’t know. They are destroyed in these things that they understand naturally, like the creatures without reason. ", // feed key: 6cf09dbb0feba38843ccdea4905fa6d9
    "Yet in the same way, these also in their dreaming defile the flesh, despise authority, and slander celestial beings. ", // feed key: 9dadb007e80b4b1a53c2d4dc6b5b1aaf
    "Now to him who is able to keep them from stumbling, and to present you faultless before the presence of his glory in great joy, ", // feed key: a439ae030d8c9785b52037913f98f451
  ]
];
 
