# typescript_problem1

flood fill
The algorithm changes all connected cells with value 1 (connected to starting cell) to 2.

## How It Works

The solution uses BFS (queue-based approach) to traverse all connected cells:

1. Store the old color value from the starting cell
2. If old color equals new color, return image (no changes needed)
3. Initialize a queue with the starting cell coordinates
4. While queue is not empty:
   - Remove a cell from the queue
   - If cell color matches old color:
     - Change it to new color
     - Add all 4-directional neighbors to the queue
5. Return the modified image

## Complexity

- Time: O(rows × cols) – each cell is processed at most once
- Space: O(rows × cols) – queue could contain up to all cells in worst case

## Prerequisites

- Node.js (version 12 or higher)
- TypeScript

## Setup and Execution

1. Save the code in a file named floodfill.ts

2. Install TypeScript:
   npm install -g typescript

3. Compile the file:
   tsc floodfill.ts

4. Run the compiled file:
   node floodfill.js

## Usage

const img = [
[1, 1, 1, 0],
[0, 1, 1, 1],
[1, 0, 1, 1]
];

const result = floodfill(img, 1, 1, 2);
console.log(result);

## Step-by-Step Example

For img = [
[1, 1, 1, 0],
[0, 1, 1, 1],
[1, 0, 1, 1]
]

Starting at (1,1) with newColor = 2, oldColor = 1

### BFS Process:

Step 1: Start at (1,1) → change to 2
Queue: [(0,1), (2,1), (1,0), (1,2)]

Step 2: Process (0,1) → oldColor=1, change to 2
Add neighbors: ( -1,1 skip), (1,1 skip done), (0,0), (0,2)
Queue: [(2,1), (1,0), (1,2), (0,0), (0,2)]

Step 3: Process (2,1) → oldColor=0 (different), skip

Step 4: Process (1,0) → oldColor=0, skip

Step 5: Process (1,2) → oldColor=1, change to 2
Add neighbors: (0,2), (2,2), (1,1 skip), (1,3)
Queue: [(0,0), (0,2), (0,2), (2,2), (1,3)]

Step 6: Process (0,0) → oldColor=1, change to 2
Add neighbors: (-1,0 skip), (1,0 skip), (0,-1 skip), (0,1 skip)
Queue: [(0,2), (0,2), (2,2), (1,3)]

Step 7: Process (0,2) → oldColor=1, change to 2
Add neighbors: (-1,2 skip), (1,2 skip), (0,1 skip), (0,3)
Queue: [(0,2), (2,2), (1,3), (0,3)]

Step 8: Process (0,2) again (duplicate) → already changed, skip

Step 9: Process (2,2) → oldColor=1, change to 2
Add neighbors: (1,2 skip), (3,2 out), (2,1 skip), (2,3)
Queue: [(1,3), (0,3), (2,3)]

Step 10: Process (1,3) → oldColor=1, change to 2
Add neighbors: (0,3), (2,3), (1,2 skip), (1,4 out)
Queue: [(0,3), (2,3), (0,3), (2,3)]

Step 11: Process (0,3) → oldColor=0, skip

Step 12: Process (2,3) → oldColor=1, change to 2
Add neighbors: (1,3 skip), (3,3 out), (2,2 skip), (2,4 out)

Final image:
[
[2, 2, 2, 0],
[0, 2, 2, 2],
[1, 0, 2, 2]
]

## Test Cases

### Test 1: Basic flood fill

Input:
img = [[1,1,1],[1,1,1],[1,1,1]]
sr=1, sc=1, newColor=2
Output: All cells become 2

### Test 2: Same color (no change)

Input:
img = [[1,1],[1,1]], sr=0, sc=0, newColor=1
Output: Original image (unchanged)

### Test 3: Single cell image

Input:
img = [[5]], sr=0, sc=0, newColor=10
Output: [[10]]

### Test 4: Disconnected regions

Input:
img = [
[1, 0, 1],
[0, 1, 0],
[1, 0, 1]
]
sr=0, sc=0, newColor=2
Output: Only the 4 corner cells with 1? Actually only (0,0) changes because others not connected 4-directionally

### Test 5: Image with no matching cells

Input:
img = [[0,0],[0,0]], sr=0, sc=0, newColor=1
Output: Only (0,0) changes, others remain 0

### Test 6: Large connected region

Input:
img = [
[1,1,1,1],
[1,1,1,1],
[1,1,1,1]
]
sr=0, sc=0, newColor=3
Output: All 1's become 3

### Test 7: Boundary start position

Input:
img = [[1,1],[1,1]], sr=0, sc=0, newColor=9
Output: All 1's become 9

## BFS vs DFS

This implementation uses BFS (queue). Alternatives include:

- DFS (recursive or stack-based)
- Both have same time and space complexity

## Key Insight

The flood fill algorithm explores all reachable cells with the same color using graph traversal. The 4-directional connectivity (up, down, left, right) determines the region boundary.

## Features

- Complete coverage of connected region
- Prevents infinite loops by checking color before changing
- Handles edge cases (same color, boundaries)
- Uses efficient BFS approach

## Limitations

- Uses queue.shift() which is O(n) in JavaScript arrays
- Can be optimized with proper queue implementation
- 4-directional only (not 8-directional)

## Optimizations

- Use proper Queue data structure for O(1) dequeue
- Early termination if newColor == oldColor
- Iterative DFS with stack for possibly lower memory

## Variations

- 8-directional flood fill (includes diagonals)
- Flood fill with boundary limit
- Bucket fill with tolerance threshold
- 3D flood fill (volumetric)

## Related Problems

- Number of islands
- Surrounded regions
- Island perimeter
- Coloring a border

## Real-world Applications

- Paint bucket tool in image editors (Photoshop, MS Paint)
- Magic wand selection tool
- Game of Go (capturing stones)
- Maze solving and pathfinding
- Medical imaging (region segmentation)
