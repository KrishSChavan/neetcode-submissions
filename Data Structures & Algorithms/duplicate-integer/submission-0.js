class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const nums_map = new Map();

        for (let i=0; i<nums.length; i++) {
            if (nums_map.get(nums[i]) >= 1) {
                return true;
            }
            nums_map.set(nums[i], 1);
        }
        return false;
    }
}
