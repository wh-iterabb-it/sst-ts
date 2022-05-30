import {
	isObjectLike,
	isString,
	isBoolean,
	isFinite,
	isInteger,
	isNull
} from '../../lib/utils/detect';

	describe('detect', () => {
		describe('isObjectLike - Unit Tests', () => {
			it('should return true for {}', () => {
				const expected = true;
				const resp = isObjectLike({});
				expect(resp).toEqual(expected);
			});
			it('should return true for []', () => {
				const expected = true;
				const resp = isObjectLike([]);
				expect(resp).toEqual(expected);
			});
			it('should return true for new Date()', () => {
				const expected = true;
				const resp = isObjectLike(new Date());
				expect(resp).toEqual(expected);
			});
			it('should return true for new RegExp()', () => {
				const expected = true;
				const resp = isObjectLike(new RegExp(""));
				expect(resp).toEqual(expected);
			});
			it('should return true for new Error()', () => {
				const expected = true;
				const resp = isObjectLike(new Error());
				expect(resp).toEqual(expected);
			});
			it('should return false for null', () => {
				const expected = false;
				const resp = isObjectLike(null);
				expect(resp).toEqual(expected);
			});
			it('should return false for undefined', () => {
				const expected = false;
				const resp = isObjectLike(undefined);
				expect(resp).toEqual(expected);
			});
			it('should return false for true', () => {
				const expected = false;
				const resp = isObjectLike(true);
				expect(resp).toEqual(expected);
			});
			it('should return false for false', () => {
				const expected = false;
				const resp = isObjectLike(false);
				expect(resp).toEqual(expected);
			});
			it('should return false for "abc"', () => {
				const expected = false;
				const resp = isObjectLike('abc');
				expect(resp).toEqual(expected);
			});
			it('should return false for 1', () => {
				const expected = false;
				const resp = isObjectLike(1);
				expect(resp).toEqual(expected);
			});
			it('should return false for 1.0', () => {
				const expected = false;
				const resp = isObjectLike(1.0);
				expect(resp).toEqual(expected);
			});
			it('should return false for 1.1', () => {
				const expected = false;
				const resp = isObjectLike(1.1);
				expect(resp).toEqual(expected);
			});
			it('should return false for 0', () => {
				const expected = false;
				const resp = isObjectLike(0);
				expect(resp).toEqual(expected);
			});
			it('should return false for 0.0', () => {
				const expected = false;
				const resp = isObjectLike(0.0);
				expect(resp).toEqual(expected);
			});
			it('should return false for 0.1', () => {
				const expected = false;
				const resp = isObjectLike(0.1);
				expect(resp).toEqual(expected);
			});
			it('should return false for -1', () => {
				const expected = false;
				const resp = isObjectLike(-1);
				expect(resp).toEqual(expected);
			});
		});
		describe('isString - Unit Tests', () => {
			it('should return true for ""', () => {
				const expected = true;
				const resp = isString('');
				expect(resp).toEqual(expected);
			});
			it('should return true for "abc"', () => {
				const expected = true;
				const resp = isString('abc');
				expect(resp).toEqual(expected);
			});
			it('should return false for {}', () => {
				const expected = false;
				const resp = isString({});
				expect(resp).toEqual(expected);
			});
			it('should return false for []', () => {
				const expected = false;
				const resp = isString([]);
				expect(resp).toEqual(expected);
			});
			it('should return false for new Date()', () => {
				const expected = false;
				const resp = isString(new Date());
				expect(resp).toEqual(expected);
			});
			it('should return false for new RegExp()', () => {
				const expected = false;
				const resp = isString(new RegExp(""));
				expect(resp).toEqual(expected);
			});
			it('should return false for new Error()', () => {
				const expected = false;
				const resp = isString(new Error());
				expect(resp).toEqual(expected);
			});
			it('should return false for null', () => {
				const expected = false;
				const resp = isString(null);
				expect(resp).toEqual(expected);
			});
			it('should return false for undefined', () => {
				const expected = false;
				const resp = isString(undefined);
				expect(resp).toEqual(expected);
			})
		});
		describe('isBoolean - Unit Tests', () => {
			it('should return true for true', () => {
				const expected = true;
				const resp = isBoolean(true);
				expect(resp).toEqual(expected);
			});
			it('should return true for false', () => {
				const expected = true;
				const resp = isBoolean(false);
				expect(resp).toEqual(expected);
			});
			it('should return false for {}', () => {
				const expected = false;
				const resp = isBoolean({});
				expect(resp).toEqual(expected);
			});
			it('should return false for []', () => {
				const expected = false;
				const resp = isBoolean([]);
				expect(resp).toEqual(expected);
			});
			it('should return false for new Date()', () => {
				const expected = false;
				const resp = isBoolean(new Date());
				expect(resp).toEqual(expected);
			});
			it('should return false for new RegExp()', () => {
				const expected = false;
				const resp = isBoolean(new RegExp(""));
				expect(resp).toEqual(expected);
			});
			it('should return false for new Error()', () => {
				const expected = false;
				const resp = isBoolean(new Error());
				expect(resp).toEqual(expected);
			});
			it('should return false for null', () => {
				const expected = false;
				const resp = isBoolean(null);
				expect(resp).toEqual(expected);
			});
			it('should return false for undefined', () => {
				const expected = false;
				const resp = isBoolean(undefined);
				expect(resp).toEqual(expected);
			})
		});
	});

