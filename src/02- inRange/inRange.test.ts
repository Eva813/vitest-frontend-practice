
import { describe, expect, it } from 'vitest';

import inRange from './inRange';


describe('inRange', () => {
    it('should return true if the value is within the range', () => {
        expect(inRange(3, 2, 4)).toBe(true);
    });
})