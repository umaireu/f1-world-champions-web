import { buildRoute } from './utils';
describe('utils', () => {
  describe('buildRoute', () => {
    it('should replace a single string parameter', () => {
      const template = '/season/:year/races';
      const params = { year: '2025' };
      const result = buildRoute(template, params);

      expect(result).toBe('/season/2025/races');
    });

    it('should replace a single number parameter', () => {
      const template = '/user/:userId/profile';
      const params = { userId: 123 };
      const result = buildRoute(template, params);

      expect(result).toBe('/user/123/profile');
    });

    it('should handle zero as a parameter', () => {
      const template = '/page/:pageNumber';
      const params = { pageNumber: 0 };
      const result = buildRoute(template, params);

      expect(result).toBe('/page/0');
    });
    it('should replace multiple parameters', () => {
      const template = '/user/:userId/profile/:tab';
      const params = { userId: 456, tab: 'settings' };
      const result = buildRoute(template, params);

      expect(result).toBe('/user/456/profile/settings');
    });

    it('should replace multiple parameters with mixed types', () => {
      const template = '/season/:year/race/:raceId/driver/:driverId';
      const params = { year: '2025', raceId: 1, driverId: 'hamilton' };
      const result = buildRoute(template, params);

      expect(result).toBe('/season/2025/race/1/driver/hamilton');
    });

    it('should return template unchanged when no parameters are provided', () => {
      const template = '/static/path';
      const params = {};
      const result = buildRoute(template, params);

      expect(result).toBe('/static/path');
    });

    it('should handle template with no parameter placeholders', () => {
      const template = '/static/path/without/params';
      const params = { someParam: 'value' };
      const result = buildRoute(template, params);

      expect(result).toBe('/static/path/without/params');
    });

    it('should handle empty string template', () => {
      const template = '';
      const params = { param: 'value' };
      const result = buildRoute(template, params);

      expect(result).toBe('');
    });

    it('should handle parameters with special characters', () => {
      const template = '/search/:query';
      const params = { query: 'hello world' };
      const result = buildRoute(template, params);

      expect(result).toBe('/search/hello world');
    });

    it('should handle parameters with numbers in the parameter name', () => {
      const template = '/item/:item1/compare/:item2';
      const params = { item1: 'apple', item2: 'orange' };
      const result = buildRoute(template, params);

      expect(result).toBe('/item/apple/compare/orange');
    });

    it('should only replace exact parameter matches', () => {
      const template = '/user/:userId/year/:year';
      const params = { userId: 123, year: 2025 };
      const result = buildRoute(template, params);

      expect(result).toBe('/user/123/year/2025');
    });

    it('should not replace partial matches', () => {
      const template = '/user/:userId/superyear/:year';
      const params = { userId: 123, year: 2025 };
      const result = buildRoute(template, params);

      expect(result).toBe('/user/123/superyear/2025');
    });

    it('should handle repeated parameter names', () => {
      const template = '/compare/:id/with/:id';
      const params = { id: 'abc123' };
      const result = buildRoute(template, params);

      expect(result).toBe('/compare/abc123/with/abc123');
    });

    it('should ignore parameters not present in template', () => {
      const template = '/season/:year/races';
      const params = { year: 2025, unused: 'value', another: 123 };
      const result = buildRoute(template, params);

      expect(result).toBe('/season/2025/races');
    });

    it('should leave placeholder unchanged when parameter is missing', () => {
      const template = '/season/:year/race/:raceId';
      const params = { year: 2025 }; // missing raceId
      const result = buildRoute(template, params);

      expect(result).toBe('/season/2025/race/:raceId');
    });
  });
});
