
import { describe, expect, it } from 'vitest';
import difference from './difference.ts';


describe('difference', () => {
    it('should return empty array', ()=>{
        expect(difference([], [])).toEqual([])
    })
    it('should return ', () => {
        
        expect(difference([1, 1, 2, 3], [2, 3])).toEqual([1, 1]);
        expect(difference([1, 2, 3], [1, 2, 3, 4])).toEqual([]);
        expect(difference([4, 3, 2, 1], [1, 2, 3])).toEqual([4]);
    });
})