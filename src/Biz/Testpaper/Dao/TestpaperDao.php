<?php

namespace Biz\Testpaper\Dao;

use Codeages\Biz\Framework\Dao\AdvancedDaoInterface;

interface TestpaperDao extends AdvancedDaoInterface
{
    public function getByIdAndType($id, $type);

    public function findTestpapersByIds(array $ids);

    public function findTestpapersByIdsAndType($ids, $type);

    public function findTestpapersByCopyIdAndCourseSetIds($copyId, $courseSetIds);

    public function getTestpaperByCopyIdAndCourseSetId($copyId, $courseSetId);

    public function deleteByCourseSetId($courseSetId);
}
