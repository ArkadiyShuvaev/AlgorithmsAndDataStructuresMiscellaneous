import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {
        var intArray = new ArrayList<Integer>();
        intArray.add(1);
        intArray.add(0);
        intArray.add(7);
        intArray.add(8);
        intArray.add(5);
        quickSort(intArray);

        //System.out.println(Arrays.toString(intArray));
    }

    private static ArrayList<Integer> quickSort(ArrayList<Integer> array) {
        if (array == null) {
            throw new NullPointerException("array");
        }

        qSort(array, 0, array.size() - 1);
        return array;
    }

    private static void qSort(ArrayList<Integer> array, int firstElemId, int lastElemId) {
        if (lastElemId - firstElemId < 1) {
            return;
        }

        var partitionedElemId = CreatePartition(array, firstElemId, lastElemId);

        qSort(array, firstElemId, partitionedElemId - 1); // Left side
        qSort(array, partitionedElemId + 1, lastElemId); // Right side
    }

    /**
     * Creates a partition.
     * @param array A reference to the sorted array.
     * @param firstItemId An id of the left border of the partition.
     * @param lastItemId An id of the right border of the partition.
     * @return  An id of the pivot item of the partitioned part of array.
     */
    private static int CreatePartition(ArrayList<Integer> array, int firstItemId, int lastItemId) {
        var pivotId = lastItemId;
        var pivotValue = array.get(lastItemId);
        var borderIndex = firstItemId;

        for (int currentIndex = firstItemId; currentIndex <= pivotId; currentIndex++) {
            if (array.get(currentIndex) <= pivotValue) {

                // if it is not the first node in the iteration ([0, 9, 5 <-- pivot ])
                if (currentIndex != borderIndex) {
                    swapItems(array, currentIndex, borderIndex);
                }

                // it is not the last node
                if (currentIndex != pivotId) {
                    borderIndex++;
                }
            }
        }

        return borderIndex;
    }

    private static void swapItems(ArrayList<Integer> array, Integer fromIndex, Integer toIndex) {
        var tmpValue = array.get(fromIndex);
        array.set(fromIndex, array.get(toIndex));
        array.set(toIndex, tmpValue);
    }

    private static int GetPivotId(ArrayList<Integer> array, int firstElemId, int lastElemId) {
        return lastElemId;
        // var random = new java.util.Random();
        // var idx = random.nextInt(array.size());
        // return idx;
    }
}
