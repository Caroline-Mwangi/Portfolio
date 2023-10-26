import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddSkill() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const AddSkillInfo = async () => {
    let field = new FormData();

    field.append("title", title);
    field.append("description", description);

    if (image !== null) {
      field.append("image", image);
    }

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/skills/",
      data: field,
    }).then((response) => {
      navigate("/");
    });
  };
  return (
    <>
      <button
        type="button"
        class="skill-btn btn bg-blue-900 text-white fw-bold"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add a skill
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
          <div class="border border-secondary modal-content bg-black bg-opacity-75">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">
                ADD A SKILL
              </h1>
            </div>
            <div class="modal-body ">
              <img src=" " alt="" />
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
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                type="text"
                className="sk_input form-control bg-black text-white"
                placeholder="Skill Description"
                name="description"
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
                onClick={AddSkillInfo}
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
