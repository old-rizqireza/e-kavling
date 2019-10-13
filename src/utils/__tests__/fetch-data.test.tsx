import {
  getAccesshToken,
  getProfile,
  getRefreshToken,
  keyAccessToken,
  keyProfile,
  keyRefreshToken,
} from '@utils/fetch-data';

const profile = {
  email: 'yuda.cogati@bhinneka.com',
  position: 'Software Developer',
};

describe('FetchData', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem(keyAccessToken, 'accessTokenValue321');
    localStorage.setItem(keyRefreshToken, 'getRefreshAccessToken1123');
    localStorage.setItem(keyProfile, JSON.stringify(profile));
  });
  describe('#getAccessToken', () => {
    it('should return access token from local storage', () => {
      expect(getAccesshToken()).toEqual('accessTokenValue321');
    });
  });
  describe('#getRefreshAccessToken', () => {
    it('should return refresh token from local storage', () => {
      expect(getRefreshToken()).toEqual('getRefreshAccessToken1123');
    });
  });
  describe('#getProfile', () => {
    it('should return profile from local storage', () => {
      expect(getProfile()).toEqual(profile);
    });
  });
});
