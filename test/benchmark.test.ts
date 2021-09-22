import valid from '../src';

describe('semver-regex benchmarks', () => {
  it('catatrophic backtracking', () => {
    const postfix =
      '.aa.aa.aa.aa.aa.aa.aa.aa.aa.aa.aa.aa.aa.aa.aa.aa.aa.aa.aa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'.repeat(
        99999
      );
    expect(valid(`v1.1.3-0aa${postfix}$`)).toBe(false);
  });

  it('ReDoS vulnerability', () => {
    const fixture = `0.0.0-0${'.-------'.repeat(50000)}@`;
    const start = Date.now();
    valid(fixture);
    const difference = Date.now() - start;
    expect(difference).toBeLessThan(10);
  });
});
