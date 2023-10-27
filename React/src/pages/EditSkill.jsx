import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditSkill() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  let loadSkill = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/skills/${id}/`);

    setImage(result.data.image);
    setTitle(result.data.title);
    setDescription(result.data.description);
  };

  useEffect(() => {
    loadSkill();
  }, []);

  const EditSkillInfo = async () => {
    let field = new FormData();

    field.append("title", title);
    field.append("description", description);

    if (image !== null) {
      field.append("image", image);
    }

    await axios({
      method: "PUT",
      url: `http://127.0.0.1:8000/skills/${id}/`,
      data: field,
    }).then((response) => {
    //   console.log(response.data);
      navigate("/");
    });
  };
  return (
    <>
      <button
        type="button"
        class="skill-btn btn text-white bg-primary ms-3 rounded"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Edit
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">
          <div class="border border-secondary modal-content bg-black">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">
                EDIT SKILL
              </h1>
            </div>
            <div class="modal-body ">
              <img src={image} alt="" />
              <input
                type="file"
                className="form-control bg-black text-white"
                placeholder="Image"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <input
                type="text"
                className="sk_input form-control mt-3 mb-3 bg-black text-white"
                placeholder="Skill Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                type="text"
                className="sk_input form-control bg-black text-white"
                placeholder="Skill Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn bg-secondary text-white"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="text-white btn bg-primary"
                onClick={EditSkillInfo}
                data-bs-dismiss="modal"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
