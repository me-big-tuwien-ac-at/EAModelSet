import unittest

from eamodelset.dataset import EAModelSet
import pandas as pd

class TestDataset(unittest.TestCase):
    # tests that EAModelSet object is initialized successfully
    def test_init_success(self):
        model_set = EAModelSet()
        self.assertIsInstance(model_set, EAModelSet)
        self.assertIsInstance(model_set.info, dict)
        self.assertIsInstance(model_set.data, pd.DataFrame)

    # tests that get_model method returns correct JSON object for an existing model id
    def test_get_model_existing_id(self):
        model_set = EAModelSet()
        model = model_set.get_model('id-54c7dff1caa743febe6d27e02ae711df')
        self.assertIsInstance(model, dict)
        self.assertEqual(model['name'], 'Example')
        self.assertEqual(len(model['elements']), 27)

if __name__ == '__main__':
    unittest.main()