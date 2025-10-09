# Title: Floyd-Warshall Algorithm
# Topic: Algorithms / Dynamic Programming
# Language: Python
# Example: see bottom

# Time Complexity: O(V^3), where V is the number of vertices
# Space Complexity: O(V^2)
# Description: Computes shortest paths between all pairs of vertices in a weighted graph.
# Handles negative weights but no negative cycles.

import math

def floyd_warshall(graph):
    """
    graph: 2D list (adjacency matrix) where graph[i][j] represents
           the weight of edge from vertex i to vertex j. Use math.inf if no edge exists.

    Returns a 2D list of shortest distances between all pairs of vertices.
    """
    # Number of vertices in the graph
    V = len(graph)
    
    # Create a copy of the graph to store distances
    # dist[i][j] will hold the shortest distance from vertex i to vertex j
    dist = [row[:] for row in graph]  # deep copy to avoid modifying original graph

    # Iterate through all vertices as intermediate points
    for k in range(V):
        # Iterate through all source vertices
        for i in range(V):
            # Iterate through all destination vertices
            for j in range(V):
                # If the path from i -> k -> j is shorter than i -> j, update it
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
                    # Debug: Uncomment the next line to see updates
                    # print(f"Updated dist[{i}][{j}] to {dist[i][j]} using vertex {k}")

    # Return the final shortest path matrix
    return dist


# Example graph represented as an adjacency matrix
# graph[i][j] = weight from vertex i to vertex j
# math.inf means there is no direct edge between i and j
graph = [
    [0, 3, math.inf, 7],
    [8, 0, 2, math.inf],
    [5, math.inf, 0, 1],
    [2, math.inf, math.inf, 0]
]

# Compute shortest paths between all pairs of vertices
shortest_paths = floyd_warshall(graph)

# Print the resulting shortest path matrix
print("Shortest path matrix:")
for row in shortest_paths:
    print(row)
