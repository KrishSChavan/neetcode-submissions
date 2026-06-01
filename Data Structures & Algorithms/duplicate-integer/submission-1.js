class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const num_set = new Set(nums);
        return num_set.size != nums.length

    }
}
